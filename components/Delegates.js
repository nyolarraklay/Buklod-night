export default function Delegates() {
  const delegates = [
    {
      name: "Mr & Mrs Balbin",
      image: "/delegates/Balbin.jpg",
    },
    {
      name: "Mrs Mary Jane Baltazar",
      image: "/delegates/Baltazar.jpg",
    },
    {
      name: "Mr & Mrs Balzita",
      image: "/delegates/Balzita.jpg",
    },
    {
      name: "Mr RC Catalasan",
      image: "/delegates/Catalasan.jpg",
    },
    {
      name: "Mr & Mrs Kluften",
      image: "/delegates/Kluften.jpg",
    },
    {
      name: "Mr & Mrs Løkke",
      image: "/delegates/Løkke.jpg",
    },
    {
      name: "Mr & Mrs Manuntag",
      image: "/delegates/Manuntag.jpg",
    },
    {
      name: "Mr & Mrs Mendoza",
      image: "/delegates/Mendoza.jpg",
    },
    {
      name: "Mrs Divine Naguit",
      image: "/delegates/Naguit.jpg",
    },
    {
      name: "Mr & Mrs Osorio",
      image: "/delegates/Osorio.jpg",
    },
    {
      name: "Mr & Mrs Paleracio",
      image: "/delegates/PaleracioE.jpg",
    },
    {
      name: "Mr & Mrs Santos",
      image: "/delegates/Santos.jpg",
    },
    {
      name: "Mr & Mrs Simon",
      image: "/delegates/Simon.jpg",
    },
    {
      name: "Mr & Mrs Tiburcio",
      image: "/delegates/Tiburcio.jpg",
    },
    {
      name: "Mr & Mrs Toledo",
      image: "/delegates/Toledo.jpg",
    },
    {
      name: "Mr & Mrs Thoreplass",
      image: "/delegates/Thoreplass.jpg",
    },
    // Add more delegate objects here
  ];

  return (
    <div className="h-full flex flex-col p-6 items-center justify-center bg-gray-800">
      <h1 className="text-6xl font-bold mb-4 text-white">Delegates</h1>
      <p className="text-lg mb-8 text-white">
        Meet the delegates of Buklod Night 2023!
      </p>

      <div className="flex flex-wrap justify-center p-6">
        {delegates.map((delegate, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img
              src={delegate.image}
              alt={`Delegate: ${delegate.name}`}
              className="rounded-lg cursor-pointer h-32 w-32 object-cover mb-2"
            />
            <p className="font-semibold text-center text-white">
              {delegate.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
