import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Button } from 'src/components/ui/Button/Button'
import { CourseCard } from './course-card'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <nav className="flex items-center justify-between bg-brand-light p-2">
        <div>
          <img src="img/logo.png" alt="brand logo of the app" />
        </div>

        <div className="flex h-full items-center">
          <Link className="text-link mr-3" to={routes.login()}>
            Login
          </Link>
          <Link to={routes.newStudent()}>
            <Button intent="primary">Enroll</Button>
          </Link>
        </div>
      </nav>

      <div className="grid grid-cols-1 p-4 md:grid-cols-2">
        <div className="rounded-lg md:order-last">
          <img
            className="rounded-lg p-1 sm:h-[500px]"
            src="https://images.pexels.com/photos/2495239/pexels-photo-2495239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center p-2">
          <h1 className="text-headline">Get into the class of scholars</h1>

          <Link to={routes.newStudent()}>
            <Button intent="primary" size="lg" className="w-fit px-12 py-6">
              {' '}
              Enroll
            </Button>
          </Link>

          <p className="text-body mt-6">
            Learn an in-demand tech skill, advance your career, and increase
            your chances of landing the right job. Tote bag seitan fam portland
            praxis roof party gochujang iPhone keytar tofu. Tumeric locavore
            tote bag pop-up four dollar toast mlkshk taiyaki readymade
            wayfarers, street art master cleanse. Subway tile hoodie cray ennui
            pabst twee normcore poke
          </p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-secondary md:mt-[200px]">POPULAR CAREER PATH</p>
        <h2 className="text-title">OUR TOP COURSES</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {new Array(6).fill('a').map((course, index) => (
            <CourseCard key={index.toString()} />
          ))}
        </div>
      </div>

      <footer className="mt-[200px] bg-brand-light p-2">
        <div>
          <img src="img/logo.png" alt="brand logo of the app" />
        </div>
        <div className="sm:grid-cols grid  grid-cols-1">
          <p className="mt-12 font-bold">Contact</p>
          <p>20 Aluguntugui Street East Legon Accra</p>

          <p className="mt-12 font-bold">Socials</p>
        </div>
        <p className="mt-32 text-center">(C) 2023 ScholarSign</p>
      </footer>
    </>
  )
}

export default HomePage
