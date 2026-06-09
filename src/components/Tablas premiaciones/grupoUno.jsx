import React from "react";
import "../Tablas premiaciones/premiaciones.css";

const GrupoUnoTable = () => (
  <section>
    <h2>Grupo Uno - 80 KM</h2>
    <div className="tableContainerG1-1">
      <table class="race-tableG1-1">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Edad</th>
            <th>Clave</th>
            <th>1er Lugar</th>
            <th>2do Lugar</th>
            <th>3er Lugar</th>
            <th>4to Lugar</th>
            <th>5to Lugar</th>
            <th>6to Lugar</th>
            <th>7mo Lugar</th>
            <th>8vo Lugar</th>
            <th>9no Lugar</th>
            <th>10mo Lugar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elite Varonil</td>
            <td>Libre</td>
            <td>X</td>
            <td>$5,000.00</td>
            <td>$4,000.00</td>
            <td>$3,000.00</td>
            <td>$2,000.00</td>
            <td>$1,000.00</td>
            <td>$500.00</td>
            <td>$500.00</td>
            <td>$300.00</td>
            <td>$300.00</td>
            <td>$300.00</td>
          </tr>
          <tr>
            <td>Elite Femenil</td>
            <td>Libre</td>
            <td>Y</td>
            <td>$5,000.00</td>
            <td>$4,000.00</td>
            <td>$3,000.00</td>
            <td>$2,000.00</td>
            <td>$1,000.00</td>
            <td>$500.00</td>
            <td>$500.00</td>
            <td>$300.00</td>
            <td>$300.00</td>
            <td>$300.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="tableContainerG1-2">
      <table className="race-tableG1-2">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Edad</th>
            <th>Clave</th>
            <th>1er Lugar</th>
            <th>2do Lugar</th>
            <th>3er Lugar</th>
            <th>4to Lugar</th>
            <th>5to Lugar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Master 20 Varonil</td>
            <td>19-29 años</td>
            <td>A</td>
            <td>$1,500.00</td>
            <td>$1,000.00</td>
            <td>$600.00</td>
            <td>$400.00</td>
            <td>$300.00</td>
          </tr>
          <tr>
            <td>Master 30 Varonil</td>
            <td>30-39 años</td>
            <td>N</td>
            <td>$1,500.00</td>
            <td>$1,000.00</td>
            <td>$600.00</td>
            <td>$400.00</td>
            <td>$300.00</td>
          </tr>
          <tr>
            <td>Master 40 Varonil</td>
            <td>40-49 años</td>
            <td>W</td>
            <td>$1,500.00</td>
            <td>$1,000.00</td>
            <td>$600.00</td>
            <td>$400.00</td>
            <td>$300.00</td>
          </tr>
          <tr>
            <td>Master 50 Varonil</td>
            <td>50 años y más</td>
            <td>J</td>
            <td>$1,500.00</td>
            <td>$1,000.00</td>
            <td>$600.00</td>
            <td>$400.00</td>
            <td>$300.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default GrupoUnoTable;
