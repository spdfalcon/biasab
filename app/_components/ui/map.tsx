'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  center: [number, number]
  zoom?: number
  className?: string
}

// Add type for icon prototype
interface ExtendedIconPrototype extends L.Icon.Default {
  _getIconUrl?: string
}

export default function Map({ center, zoom = 15, className }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!mapInstanceRef.current && mapRef.current) {
      // Fix icon paths with proper typing
      const prototype = L.Icon.Default.prototype as ExtendedIconPrototype
      delete prototype._getIconUrl
      
      L.Icon.Default.mergeOptions({
        iconUrl: '/images/marker-icon.png',
        iconRetinaUrl: '/images/marker-icon-2x.png',
        shadowUrl: '/images/marker-shadow.png',
      })

      // Create map instance
      const map = L.map(mapRef.current).setView(center, zoom)
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Add marker
      L.marker(center).addTo(map)
        .bindPopup('دفتر بی اعصاب')
        .openPopup()

      mapInstanceRef.current = map
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom])

  return <div ref={mapRef} className={className} />
}
