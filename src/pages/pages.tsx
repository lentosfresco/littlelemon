interface Page {
  name: string;
  path: string;
  anchorable: boolean;
}

const pages = new Map<string, Page>();
pages.set("home", { name: "Home", path: "/", anchorable: true });
pages.set("about", { name: "About", path: "/about", anchorable: true });
pages.set("menu", { name: "Menu", path: "/menu", anchorable: true });
pages.set("reservations", {
  name: "Reservations",
  path: "/reservations",
  anchorable: true,
});
pages.set("confirmedBooking", {
  name: "Confirmed Booking",
  path: "/confirmed-booking",
  anchorable: false,
});
pages.set("orders", {
  name: "Order Online",
  path: "/orders",
  anchorable: true,
});
pages.set("login", { name: "Login", path: "/login", anchorable: true });

export default pages;
