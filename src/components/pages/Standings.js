import React from "react";

function Standings() {
  return (
    
    <div class="container">

      <article>
        <header><h1>THE LEADER BOARD</h1></header>

        <p class="alert">UPDATED: March 11, 2019</p>
        <table width="100%" class="raceResults" summary="race results">
          <tbody>
            <tr bgcolor="FFFFFF">
              <td valign="top">Season Standings</td>
              <td valign="top"><a href="2019/standings/SS-BestNFinishesACAB-ByClass.html" title="Results by Class" target="_blank"> <font color="#003399" face="Helvetica,Helvetica Narrow,Arial">By Class</font></a></td>
              <td valign="top"><a href="2019/standings/SS-BestNFinishesACAB-ByGender_Men.html" title="Men" target="_blank"> <font color="#003399" face="Helvetica,Helvetica Narrow,Arial">Men</font></a></td>
              <td valign="top"><a href="2019/standings/SS-BestNFinishesACAB-ByGender_Women.html" title="Women" target="_blank"> <font color="#003399" face="Helvetica,Helvetica Narrow,Arial">Women</font></a></td>
            </tr>
            <tr bgcolor="FFFFFF">
              <td valign="top">JANS CUP Standings</td>
              <td valign="top"><a href="2019/standings/ES-JansCup-WCPoints-ByClass.html" title="Results by Class" target="_blank"> <font color="#003399" face="Helvetica,Helvetica Narrow,Arial">By Class</font></a></td>
              <td valign="top"><a href="2019/standings/ES-JansCup-WCPoints-ByGender_Men.html" title="Men" target="_blank"> <font color="#003399" face="Helvetica,Helvetica Narrow,Arial">Men</font></a></td>
              <td valign="top"><a href="2019/standings/ES-JansCup-WCPoints-ByGender_Women.html" title="Women" target="_blank"> <font color="#003399" face="Helvetica,Helvetica Narrow,Arial">Women</font></a></td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="home-feature-photo">
        <figure>
          <img src="/images/2019BIBS.jpg" width="680" height="520" alt="2019 colored bib winners" />
          <figcaption>2019 Colored Bib Winners</figcaption>
        </figure>

      </article>
      <p class="flow-text">The Intermountain masters maintain overall season standings for all active competitors. 
      Season awards are given for outstanding results in each age class. The top men and women in the overall standings at 
      the end of the season are awarded special leader bibs to wear during the following season. </p>

      <p class="flow-text">Season scoring uses the "old World Cup points" system, 
      where points are awarded on a scale of 25, 20, 15, 12, 11, 10, ..., 1 to the top 15 finishers. 
      For the season age class standings, competitors in the men's super seed class are awarded 20 points in their age class standings for each SS finish.  </p>

      <p class="flow-text"> Overall standings are based on best results in up to one half of the total number of races held in the season(rounded up ).
      </p>

    </div>
  );
}

export default Standings;
