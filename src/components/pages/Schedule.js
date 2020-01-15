import React from "react";

function Schedule() {
  return (
    <div className="container">
      <h2>THE SCHEDULE</h2>
      <h4>Game on for the 2019-20 race season</h4>
      <p>
        All competitors can register online for races at <span><a href="https://www.skiracereg.com/im" title="SkiRaceReg.com - Intermountain/Northern Masters" target="_blank">www.skiracereg.com/im</a></span>.
        <br/>Select <b>Intermountain/Northern Masters</b> in the <i>Currently Selected Race Series</i> drop down choices in the upper right.
      </p>
        <table width="100%" className="striped">
         
            <tr bgcolor="#cfd8dc">
              <td class="tableHeader">Date</td>
              <td class="tableHeader">Location</td>
              <td class="tableHeader">Discipline</td>
              <td colspan="5" class="tableHeader">Race</td>
            </tr>
          <tbody>
            <tr bgcolor="#DEB0AF">
              <td bgcolor="#eceff1" class="subtitle" colspan="4">December 2019</td>

            </tr>

            <tr>
              <td>13</td>
              <td>Red Lodge, MT</td>
              <td>GS</td>
              <td></td>
            </tr>
            <tr bgcolor="#DEB0AF">
              <td bgcolor="#eceff1" class="subtitle" colspan="4">January 2020</td>

            </tr>

            <tr>
              <td>4-5</td>
              <td>Grand Targee, WY (Out of Driggs ID)</td>
              <td>CANCELLED - lack of snow</td>
            </tr>
            <tr>
              <td>17-19</td>
              <td>Sun Valley, ID</td>
              <td>2SG/GS/SL</td>
              <td>Skoch Cup</td>
            </tr>
            <tr>
              <td>25-26</td>
              <td>Snowking, WY</td>
              <td>GS/SL</td>
              <td>Cowboy Classic</td>
            </tr>

            <tr bgcolor="#DEB0AF">
              <td bgcolor="#eceff1" class="subtitle" colspan="4">February 2020</td>

            </tr>
            <tr>
              <td>1-2</td>
              <td>Rotarun, ID</td>
              <td>GS/SL</td>
              <td>Jans Cup</td>
            </tr>
            <tr>
              <td>7-9</td>
              <td>Northstar, CA</td>
              <td>2SG/SL/GS/</td>
              <td>FIS Masters/Western Regionals</td>
            </tr>
            <tr>
              <td>22-23</td>
              <td>Nordic Valley, Eden, UT</td>
              <td>GS/SL/GS</td>
              <td>Jans Cup</td>
            </tr>

            <tr bgcolor="#DEB0AF">
              <td bgcolor="#eceff1" class="subtitle" colspan="4">March 2020</td>

            </tr>
            <tr>
              <td>6-8</td>
              <td>Park City, UT</td>
              <td>SG/SL/GS</td>
              <td>Loritz/Pendleton Cup</td>
            </tr>
            <tr>
              <td>14-20</td>
              <td>Cooper/Steamboat CO</td>
              <td>2DH/2SG/SL/GS</td>
              <td>National Championships</td>
            </tr>
        </tbody>
      </table>
    </div>
        );
      }
      
      export default Schedule;
