export interface AppSystemDesign {
  colors: {
    primary: string;
    secondary: string;
    tercary: string;
    input: string;
    verify: string;
    activePaymentCardBg: string;
    paymentCardBg: string;
  };
  borders: {
    radius: {
      btn: number;
      input: number;
    };
  };
}

export const appSystemDesign: AppSystemDesign = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#FFC121",
    tercary: "#000000",
    input: "#C2C2C2",
    verify: "#353535",
    activePaymentCardBg: "#151B3A",
    paymentCardBg: "#F5F5F5",
  },
  borders: {
    radius: {
      btn: 10,
      input: 10,
    },
  },
};
