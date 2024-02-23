import { Button } from "src/components/ui/Button/Button";


export function CourseCard() {

  return (<div className='h-64 rounded-3xl p-2 mt-6' style={{ backgroundImage: "url(https://images.pexels.com/photos/8471984/pexels-photo-8471984.jpeg?auto=compress&cs=tinysrgb&w=1600)", backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className='flex'>

      <Button className='bg-white text-brand ml-auto'>Class starts: August 20, 2023</Button>
    </div>

    <div className='mt-6 bg-white h-36 p-4 rounded-lg'>
      <p className='text-subheader'>Chemistry</p>
      <Button size='sm' className='bg-brand text-white mt-12'>4 months</Button>
    </div>
  </div>)
}
