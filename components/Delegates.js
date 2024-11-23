/* eslint-disable @next/next/no-img-element */
export default function Delegates() {
  const delegates = [
    {
      name: "Mr & Mrs Anor",
      image: "/delegates/Anor.jpg",
    },
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
      name: "Mr & Mrs Estoy",
      image: "/delegates/Estoy.jpg",
    },
    {
      name: "Mr & Mrs Hauge",
      image: "/delegates/Hauge.jpg",
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
      name: "Mr & Mrs Lunde",
      image: "/delegates/Lunde.jpg",
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
      name: "Mr & Mrs Pancho",
      image: "/delegates/Pancho.jpg",
    },
    {
      name: "Mr & Mrs Pineda",
      image: "/delegates/Pineda.jpg",
    },
    {
      name: "Mr & Mrs Sabado",
      image: "/delegates/Sabado.jpg",
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
      name: "Mr & Mrs Thoreplass",
      image: "/delegates/Thoreplass.jpg",
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
      name: "Mr & Mrs Vennegas",
      image: "/delegates/Vennegas.jpg",
    },
    // Add more delegate objects here
  ];

  return (
    <div className="h-full flex flex-col p-6 items-center justify-center bg-gray-800">
      <h1 className="text-6xl font-bold mb-4 text-white">Delegates</h1>
      <p className="text-lg mb-8 text-white">
        Meet the delegates of Buklod Night 2023!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center p-6">
        {delegates.map((delegate, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <img
              src={delegate.image}
              alt={`Delegate: ${delegate.name}`}
              className="rounded-lg cursor-pointer w-48 object-contain mb-2"
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
