import TopBar from "./TopBar";

const Client = () => {
  const user = {
    name: "Pranav Sinha",
    image:
      "https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_1280.png",
    status: "active",
  };
  return (
    <section className="w-screen h-screen">
      <TopBar user={user} />
    </section>
  );
};

export default Client;
