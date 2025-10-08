export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">The Agile Dad</h1>
        <p className="text-xl mb-6">A no-nonsense fitness and weight loss tracker for busy dads.</p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );
}
