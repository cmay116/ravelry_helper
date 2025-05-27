(function() {
  const tab = document.createElement('div');
  tab.id = 'ravelry-converter-tab';
  tab.innerHTML = `
    <div id="ravelry-converter-header">Ravelry Helper</div>
    <div id="ravelry-converter-content" style="display: none;">
      <div id="ravelry-tab-buttons">
        <button id="toggle-converter">Converter</button>
        <button id="toggle-needle-guide">Needle Guide</button>
      </div>
      <div id="ravelry-converter-body" class="tab-section">
        <div class="converter-row">
          <label>Meters:<br/><input type="number" id="meters-input" /></label>
          <label>Yards:<br/><input type="number" id="yards-input" /></label>
        </div>
        <div class="converter-row">
          <label>Centimeters:<br/><input type="number" id="cm-input" /></label>
          <label>Inches:<br/><input type="number" id="inches-input" /></label>
        </div>
      </div>
      <div id="ravelry-needle-guide" class="tab-section" style="display: none;">
        <table>
          <thead><tr><th>US Size</th><th>mm Size</th></tr></thead>
          <tbody>
            <tr><td>000</td><td>1.5</td></tr>
            <tr><td>00</td><td>1.75</td></tr>
            <tr><td>0</td><td>2.0</td></tr>
            <tr><td>1</td><td>2.25</td></tr>
            <tr><td>2</td><td>2.75</td></tr>
            <tr><td>3</td><td>3.25</td></tr>
            <tr><td>4</td><td>3.5</td></tr>
            <tr><td>5</td><td>3.75</td></tr>
            <tr><td>6</td><td>4.0</td></tr>
            <tr><td>7</td><td>4.5</td></tr>
            <tr><td>8</td><td>5.0</td></tr>
            <tr><td>9</td><td>5.5</td></tr>
            <tr><td>10</td><td>6.0</td></tr>
            <tr><td>10.5</td><td>6.5</td></tr>
            <tr><td>11</td><td>8.0</td></tr>
            <tr><td>13</td><td>9.0</td></tr>
            <tr><td>15</td><td>10.0</td></tr>
            <tr><td>17</td><td>12.0</td></tr>
            <tr><td>19</td><td>15.0</td></tr>
            <tr><td>35</td><td>19.0</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(tab);

  const metersInput = () => document.getElementById('meters-input');
  const yardsInput = () => document.getElementById('yards-input');
  const cmInput = () => document.getElementById('cm-input');
  const inchesInput = () => document.getElementById('inches-input');
  const content = () => document.getElementById('ravelry-converter-content');
  const converterBody = () => document.getElementById('ravelry-converter-body');
  const needleGuide = () => document.getElementById('ravelry-needle-guide');

  document.getElementById('ravelry-converter-header').onclick = () => {
    content().style.display = content().style.display === 'none' ? 'block' : 'none';
  };

  document.getElementById('toggle-converter').onclick = () => {
    converterBody().style.display = 'block';
    needleGuide().style.display = 'none';
  };

  document.getElementById('toggle-needle-guide').onclick = () => {
    converterBody().style.display = 'none';
    needleGuide().style.display = 'block';
  };

  metersInput().oninput = () => {
    yardsInput().value = (metersInput().value * 1.09361).toFixed(2);
  };
  yardsInput().oninput = () => {
    metersInput().value = (yardsInput().value / 1.09361).toFixed(2);
  };
  cmInput().oninput = () => {
    inchesInput().value = (cmInput().value * 0.393701).toFixed(2);
  };
  inchesInput().oninput = () => {
    cmInput().value = (inchesInput().value / 0.393701).toFixed(2);
  };
})();