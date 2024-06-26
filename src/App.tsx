function App() {
  return (
    <div>
      <div className="w-full flex justify-around container mx-auto p-5">
        <button className="px-2 py-1 bg-red-500 text-white rounded-md font-semibold">
          Decrement
        </button>
        <h1 className="text-xl font-bold bg-blue-200 p-5">0</h1>
        <button className="px-2 py-1 bg-green-500 text-white rounded-md font-semibold">
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
