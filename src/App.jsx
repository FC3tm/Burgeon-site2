import "./styles.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <img
          src="https://via.placeholder.com/1200x800"
          alt="Man wearing Burgeon hat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center bg-black bg-opacity-40 p-8 rounded-md max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">Burgeon</h1>
          <p className="italic text-gray-200 text-lg mb-4">to grow; to flourish</p>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Premium hats built with purpose. Supporting men’s mental health—inside and out.
          </p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-2xl shadow hover:scale-105 transition">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full" />
          <h3 className="text-xl font-semibold">Water‑Repellent Shell</h3>
          <p className="text-gray-600">Stay dry in any storm with our signature Hydrobond fabric.</p>
        </div>
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full" />
          <h3 className="text-xl font-semibold">Anti‑Odor Sweatband</h3>
          <p className="text-gray-600">Moisture-wicking, odor-resistant interior—comfort all day.</p>
        </div>
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full" />
          <h3 className="text-xl font-semibold">Hidden Remembrance Quote</h3>
          <p className="text-gray-600">A message of strength hidden under every brim.</p>
        </div>
      </section>

      {/* Founder’s Message */}
      <section className="py-16 px-6 md:px-20 bg-white max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">A Message from the Founder</h2>
        <blockquote className="italic text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
          “The strongest men are not those who show no emotion, but those who feel deeply and can still choose to be brave.”
        </blockquote>
        <p className="text-gray-700 mb-4">
          I like to think I’ve lived a pretty good life. I’ve traveled, built great friendships, and I keep up with hobbies like golf, hitting the gym, and spending time outdoors. Yet sometimes, when I’m not active or my mind isn’t busy, the world feels like it’s demanding too much — maybe even more than I can handle.
        </p>
        <p className="text-gray-700 mb-4">
          At 26 years old, I’m truly grateful for my experiences, so why do I sometimes feel like leaving this world?
        </p>
        <p className="text-gray-700 mb-4">
          People who know me might say I have a big heart, but also an emotionless exterior. I’m a lone wolf — I don’t often speak about my feelings or thoughts. I’m funny and can connect with all kinds of people, but when I’m alone, the weight of the world hits me all at once.
        </p>
        <p className="text-gray-700 mb-4">
          That’s why I created <strong>Burgeon Hats</strong> — to give back to a community, and to keep my own mind busy by making hats I’m proud of.
        </p>
        <p className="text-gray-700 font-semibold">
          Burgeon is more than hats. It’s a movement for men who feel deeply, who struggle, and who choose to grow and flourish.
        </p>
      </section>

      {/* Mental Health Resources */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Mental Health Resources & Facts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <a href="https://www.menstalk.org" className="text-blue-600 hover:underline" target="_blank">Men’s Talk — support network for men’s mental health</a>
          </li>
          <li>
            <a href="https://www.mentalhealth.gov" className="text-blue-600 hover:underline" target="_blank">MentalHealth.gov — US mental health info & help</a>
          </li>
          <li>
            <a href="https://www.headspace.com" className="text-blue-600 hover:underline" target="_blank">Headspace — Mindfulness & meditation support</a>
          </li>
          <li>
            1 in 8 men experience depression during their lifetime.
          </li>
          <li>
            Men are statistically less likely to seek mental health help — let’s change that together.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Burgeon. All rights reserved.
      </footer>
    </div>
  );
}
