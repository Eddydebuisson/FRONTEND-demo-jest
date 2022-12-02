


/**
 * cette fonction renvoi dans la console le profit ou la perte
 */
export  let benefice = (fabrication: number, vente: number): void => {
    let profit: number = Math.abs(fabrication - vente);
    fabrication > vente
      ? console.log(`Perte de ${profit}$`)
      : console.log(`Gain de ${profit}$`);
  };
  

  