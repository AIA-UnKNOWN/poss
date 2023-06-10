const useFullLayout = () => {
  const navigationBarProps = {
    companyName:"AIA POSS",
    logoUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png`,
    upperNav: [
      {
        label: 'Products',
        onClick: (navLabel) => {
          alert(navLabel)
        },
      },
      {
        label: 'Transactions',
        onClick: (navLabel) => {
          alert(navLabel)
        },
      },
      {
        label: 'Dashboard',
        onClick: (navLabel) => {
          alert(navLabel)
        },
      },
      {
        label: 'Inventory',
        onClick: (navLabel) => {
          alert(navLabel)
        },
      },
    ],
    lowerNav: [
      {
        label: 'Sign Out',
        onClick: (navLabel) => {
          alert(navLabel)
        },
      },
    ],
  }
  const orderDetailsBar = {
    products: [
      {
        name: 'Vitamilk',
        price: 30,
        quantity: 100,
        photoUrl: `data:image/jpeg;base64,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`,
      },
    ],
  }

  return {
    navigationBarProps,
    orderDetailsBar,
  }
}

export default useFullLayout;