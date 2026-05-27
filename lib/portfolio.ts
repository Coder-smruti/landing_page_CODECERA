export type PortfolioProject = {
  title: string
  category: string
  url: string
  image: string
  color: string
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "VM Builders",
    category: "Construction",
    url: "https://vmbuilders.in/",
    image: "/portfolio/vm.png",
    color: "from-red-500 to-red-700",
  },
  {
    title: "Velomora Home",
    category: "Luxury Home Decor",
    url: "https://velomorahome.com/",
    image: "/portfolio/velomora.png",
    color: "from-amber-500 to-yellow-700",
  },
  {
    title: "MAX EV",
    category: "EV Charging",
    url: "https://maxevstation.com/",
    image: "/portfolio/max-ev.png",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Teryfit",
    category: "Premium Fashion",
    url: "https://teryfit.com/",
    image: "/portfolio/teryfit.png",
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "SITSSA",
    category: "Sports Association",
    url: "https://www.southindiantraditionalsilambamsportsassociation.com/",
    image: "/portfolio/sitssa.png",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Aquatik Angels",
    category: "Aquatics & Sports",
    url: "https://www.aquatikangels.com/",
    image: "/portfolio/aquatik-angels.png",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Shree Chidambaram Natyalaya",
    category: "Classical Dance Academy",
    url: "https://shreechidambaramnatyalaya.com/",
    image: "/portfolio/shree.png",
    color: "from-amber-600 to-yellow-800",
  },
  {
    title: "Jazz Holidays",
    category: "Travel & Tourism",
    url: "https://jazzholidays.in/",
    image: "/portfolio/jazz-holidays.png",
    color: "from-violet-500 to-purple-700",
  },
]

export function getDomain(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
}
