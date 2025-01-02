import React from "react";
import "../Tablas premiaciones/premiaciones.css";

const InfantilesTable = () => (
  <section>
    <h2>Infantiles</h2>
    <table className="race-table">
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Edad</th>
          <th>Distancia</th>
          <th>Vueltas</th>
          <th>Rodada</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Infantil Pañales Femenil</td>
          <td>4 y menos años</td>
          <td>500 MTS</td>
          <td>500 MTS</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Infantil Pañales Varonil</td>
          <td>4 y menos años</td>
          <td>500 MTS</td>
          <td>500 MTS</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Infantil AA Femenil</td>
          <td>5 y 6 años</td>
          <td>1 KM</td>
          <td>1 KM</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Infantil AA Varonil</td>
          <td>5 y 6 años</td>
          <td>1 KM</td>
          <td>1 KM</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Infantil A Femenil</td>
          <td>7 a 8 años</td>
          <td>4 KM</td>
          <td>1 vuelta</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Infantil A Varonil</td>
          <td>7 a 8 años</td>
          <td>4 KM</td>
          <td>1 vuelta</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Infantil B Femenil</td>
          <td>9 a 10 años</td>
          <td>8 KM</td>
          <td>2 vueltas</td>
          <td>Libre</td>
        </tr>
        <tr>
          <td>Infantil B Varonil</td>
          <td>9 a 10 años</td>
          <td>8 KM</td>
          <td>2 vueltas</td>
          <td>Libre</td>
        </tr>
        <tr>
          <td>Infantil C Femenil</td>
          <td>11 a 12 años</td>
          <td>12 KM</td>
          <td>3 vueltas</td>
          <td>Libre</td>
        </tr>
        <tr>
          <td>Infantil C Varonil</td>
          <td>11 a 12 años</td>
          <td>12 KM</td>
          <td>3 vueltas</td>
          <td>Libre</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default InfantilesTable;
