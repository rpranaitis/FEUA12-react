import logo from './assets/logo.jpg';
import './App.css'

function App() {
  return (
    <>
    <div className="container">
      <div className="top-header p-3">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <nav className="top-nav p-3">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
      </nav>
      <header className="p-3 mt-3">
        <span>Header Image</span>
      </header>
      <div className="d-flex gap-3 mt-3">
        <section>
          <div className="col-12 d-flex flex-column gap-1">
            <h4>About</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat fuga molestiae maxime labore pariatur reiciendis ea voluptatibus animi, architecto cumque debitis? Dicta asperiores illum cupiditate corrupti, repudiandae consequuntur ratione?</p>
          </div>
        </section>
        <section>
          <div className="col-12 d-flex flex-column gap-1">
            <h4>Company</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat fuga molestiae maxime labore pariatur reiciendis ea voluptatibus animi, architecto cumque debitis? Dicta asperiores illum cupiditate corrupti, repudiandae consequuntur ratione?</p>
          </div>
        </section>
        <section>
          <div className="col-12 d-flex flex-column gap-1">
            <h4>Services</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat fuga molestiae maxime labore pariatur reiciendis ea voluptatibus animi, architecto cumque debitis? Dicta asperiores illum cupiditate corrupti, repudiandae consequuntur ratione?</p>
          </div>
        </section>
      </div>
      <main className="d-flex gap-3 mt-3 p-3">
        <div className="col-8">
          <div className="d-flex flex-column gap-1">
            <span className="fs-3">Content</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi culpa laboriosam, odit veniam pariatur tempora quaerat obcaecati sed nemo ratione minus. Numquam, fugit atque dolorum voluptas expedita culpa porro sunt.</p>
          </div>
          <div className="d-flex flex-column gap-1">
            <span className="fs-5">Sub Header</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis neque quibusdam, ex excepturi sit veritatis, nobis reprehenderit quaerat odit pariatur, inventore illum. Pariatur distinctio voluptatibus quaerat et, vitae architecto vel illo hic voluptatem numquam aut reprehenderit tempore dicta suscipit ullam consequatur unde ratione magnam fugit reiciendis necessitatibus? Adipisci, obcaecati. Aliquam!</p>
          </div>
        </div>
        <div className="col-4">
          <span className="fs-5">Navigation</span>
          <nav className="bottom-nav me-3">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
