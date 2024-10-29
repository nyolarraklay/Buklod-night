export default function Delegates() {
  const delegates = [
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    {
      name: "Mr & Mrs Osorio",
      image:
        "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995",
    },
    // Add more delegate objects here
  ];

  return (
    <div className="h-full flex flex-col p-6 items-center justify-center bg-gray-800">
      <h1 className="text-6xl font-bold mb-4 text-white">Delegates</h1>
      <p className="text-lg mb-8 text-white">
        Meet the delegates of Buklod Night 2024!
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
