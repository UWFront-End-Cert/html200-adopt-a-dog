# html200-adopt-a-dog
## TESTING

### User persona: Gillian Anderson
*	Occupation: speech therapist employed by school district
*	Married: spouse is manager at local grocery store
*	Kids: ages 4 and 7
*	2-br apartment
*	Technologies: parents have newer smart phones, kids share a family laptop, which is about 5 years old but is able to run Windows 10

Gillian is looking to add a dog to the family, one of an appropriate size and energy level for apartment living. Adopting a rescue is preferable from a cost standpoint, but it's challenging to find a rescue dog that is good with kids and doesn't have behavioral challenges. Gillian would like to use an adoption service that can help her navigate the process, which can feel overwhelming to a busy parent who is frequently distracted. It is important that the website be fully functional on mobile devices, since Gillian doesn't often get to use the family laptop.

___

<table>
<tr>
  <th></th>
  <th>Firefox Windows 10</th>
  <th>Edge Windows 10</th>
  <th>Chrome Windows 10</th>
  <th>Opera Windows 10</th>
  <th>Safari iPad</th>
  <th>Safari iPhone</th>
</tr>
<tr>
  <td><b>Appearance - layout</b></td>
  <td>On smaller screens, rightmost dogcard on index.html glitches on mouseover</td>
  <td>On smaller screens, rightmost dogcard on index.html glitches on mouseover</td>
  <td>On smaller screens, rightmost dogcard on index.html glitches on mouseover</td>
  <td>On smaller screens, rightmost dogcard on index.html glitches on mouseover</td>
  <td><i>Portrait mode:</i> .dogcard-focus causes the dog cards to move down a row<br>
      <i>Landscape mode:</i> need to scroll right to see aside on index.html</td>
  <td><i>Portrait mode:</i> When zoomed out to fit page on screen, there is a noticeable white margin on the right<br>
      <i>Landscape mode:</i> Noticeable white margin at left and right. Trying to decide whether that's a problem.</td>
</tr>
<tr>
  <td><b>Appearance - other</b></td>
  <td>Margin at right, shows scroll bar</td>
  <td>Margin at right, shows scroll bar</td>
  <td>Margin at right, shows scroll bar</td>
  <td>Margin at right, shows scroll bar</td>
  <td><i>Landscape mode:</i> .dogcards seem to be very stretched, vertically</td>
  <td></td>
</tr>
<tr>
  <td><b>HTML/CSS</b></td>
  <td>No issues</td>
  <td>
    <ul>
      <li>Edge flagged that not all images have alt tags, such as the cart icon</li>
      <li>Edge can't see the <ul></ul> tag in footer nav?</li>
      <li>Possible issue with FontAwesome: '-ms-filter' is not supported by Chrome...</li>
    </ul></td>
  <td>No issues</td>
  <td>No issues</td>
  <td>No issues</td>
  <td>No issues</td>
</tr>  
<tr>
  <td><b>Scripts</b></td>
  <td>No issues</td>
  <td>No issues</td>
  <td>No issues</td>
  <td>No issues</td>
  <td>No issues</td>
  <td>No issues</td>
</tr> 
</table>
