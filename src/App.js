import './App.css';

function App() {
  return (
    <div class="m-0 p-0">
      <header>
        <nav class="block text-center text-black w-full">
          <ul class="mt-3 mb-3">
            <li class="inline mr-24"><a class="font-light hover:font-bold" href="#home">Home</a></li>
            <li class="inline mr-24"><a class="font-light hover:font-bold" href="#about">About Me</a></li>
            <li class="inline mr-24"><a class="font-light hover:font-bold" href="#portofolio">Portofolio</a></li>
            <li class="inline mr-24"><a class="font-light hover:font-bold" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="px-10">
          <div class="flex w-full text-center min-h-screen">
            <h1 className="font-mono text-3xl font-bold my-auto grow">
                Hello,<br/>
                Im Ainur Rahman
            </h1>            
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
