interface Agency {
  id: string
  name: string
  level: string
  diamonds: string
  beans: string
  coinSell: string
  coinBuy: string
  location: string
  status: "active" | "inactive"
}

export const mockData: Agency[] = [
  {
    id: "0012300",
    name: "StartHost...",
    level: "LM",
    diamonds: "100M",
    beans: "100K",
    coinSell: "14K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
  {
    id: "0012301",
    name: "Elite Broa...",
    level: "LM",
    diamonds: "100K",
    beans: "100K",
    coinSell: "120K",
    coinBuy: "100M",
    location: "Bangladesh",
    status: "active",
  },
  {
    id: "001",
    name: "Premium...",
    level: "LM",
    diamonds: "100K",
    beans: "100M",
    coinSell: "90K",
    coinBuy: "100M",
    location: "Bangladesh",
    status: "active",
  },
  {
    id: "09401",
    name: "StartHost...",
    level: "LM",
    diamonds: "100K",
    beans: "100K",
    coinSell: "99K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
  {
    id: "0091",
    name: "StartHost...",
    level: "LM",
    diamonds: "100K",
    beans: "100K",
    coinSell: "100K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
  {
    id: "001100",
    name: "Premium...",
    level: "LM",
    diamonds: "100K",
    beans: "100K",
    coinSell: "100K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
]