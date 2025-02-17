import { Button } from './_components/ui/button';

export default function Home() {
  return (
    <main className="container py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-600">بی اعصاب</h1>
        <p className="mt-4 text-xl text-secondary-600">پلتفرم مدیریت تمرینات بدنسازی</p>
        <Button className="mt-8">شروع کنید</Button>
      </div>
    </main>
  );
}
