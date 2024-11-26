import Navbar from '@/compnent/Navbar';
import Footer from '@/compnent/Footer';

const Home = () => (
  <div>
    <Navbar />
    <main
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(Background2.jpg)" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded text-center text-white">
      <p className="text-4xl mt-2 item-center">Hot FRENCH</p>
        <h1 className="text-4xl font-bold">Welcome to A1 Pizza shop !</h1>
        <p className="mt-2">Delicious pizza awaits you.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
