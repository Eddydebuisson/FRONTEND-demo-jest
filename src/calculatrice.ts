export class Calculatrice {

    /**
     * Effectue un calcul à l'aide de la méthode éval
     * @param operation l'opération 
     * @returns le resultat de l'opération 
     */
  public calculer(operation: string): number {
    return eval(operation);
  }
}
