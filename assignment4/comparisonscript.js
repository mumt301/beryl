const header = ['File Name', 'Compression Algorithm', 'Bit-rate', 'Original Size', "Compressed Size", 'Compression Ratio', 'Link to Original Audio', 'Link to Compressed Audio', 'Link to Residual Audio']

let audio_sample = [{
    'File Name': 'Jazz',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '145-185 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '633 KB',
    'Compression Ratio': '0.12',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_mp3_medium.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_mp3_residual_medium.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '170-210 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '801 KB',
    'Compression Ratio': '0.15',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_mp3_standard.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_mp3_residual_standard.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '220-260 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1100 KB',
    'Compression Ratio': '0.20',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_mp3_extreme.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_mp3_residual_extreme.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '320 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '2500 KB',
    'Compression Ratio': '0.45',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_mp3_insane.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_mp3_residual_insane.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'low quality',
    'Original File Size': '5500 KB',
    'Compressed File Size': '436 KB',
    'Compression Ratio': '0.08',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ogg_low.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ogg_residual_low.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'low-mid quality',
    'Original File Size': '5500 KB',
    'Compressed File Size': '646 KB',
    'Compression Ratio': '0.12',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ogg_low_mid.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ogg_residual_low_mid.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'high-mid quality',
    'Original File Size': '5500 KB',
    'Compressed File Size': '905 KB',
    'Compression Ratio': '0.16',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ogg_high_mid.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ogg_residual_high_mid.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'high quality',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1800 KB',
    'Compression Ratio': '0.33',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ogg_high.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ogg_residual_high.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '96 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '748 KB',
    'Compression Ratio': '0.14',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ac3_96.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ac3_residual_96.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '128 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '997 KB',
    'Compression Ratio': '0.18',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ac3_128.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ac3_residual_128.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '192 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1500 KB',
    'Compression Ratio': '0.27',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ac3_192.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ac3_residual_192.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '320 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '2500 KB',
    'Compression Ratio': '0.45',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_ac3_320.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_ac3_residual_320.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '98 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1300 KB',
    'Compression Ratio': '0.24',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_m4a_98.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_m4a_residual_98.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '128 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1500 KB',
    'Compression Ratio': '0.27',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_m4a_128.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_m4a_residual_128.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '192 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1400 KB',
    'Compression Ratio': '0.25',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_m4a_192.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_m4a_residual_192.wav">residual audio</a>'
  }, {
    'File Name': 'Jazz',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '320 kbps',
    'Original File Size': '5500 KB',
    'Compressed File Size': '1400 KB',
    'Compression Ratio': '0.25',
    'Link to Original Version': '<a href="jazz_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="jazz_m4a_320.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="jazz_m4a_residual_320.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '145-185 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '544 KB',
    'Compression Ratio': '0.11',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_mp3_medium.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_mp3_residual_medium.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '170-210 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '688 KB',
    'Compression Ratio': '0.13',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_mp3_standard.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_mp3_residual_standard.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '220-260 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '893 KB',
    'Compression Ratio': '0.18',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_mp3_extreme.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_mp3_residual_extreme.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'MP3',
    'Compression Bit-Rate': '320 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '2300 KB',
    'Compression Ratio': '0.45',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_mp3_insane.mp3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_mp3_residual_insane.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'low quality',
    'Original File Size': '5100 KB',
    'Compressed File Size': '395 KB',
    'Compression Ratio': '0.08',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ogg_low.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ogg_residual_low.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'low-mid quality',
    'Original File Size': '5100 KB',
    'Compressed File Size': '575 KB',
    'Compression Ratio': '0.11',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ogg_low_mid.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ogg_residual_low_mid.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'high-mid quality',
    'Original File Size': '5100 KB',
    'Compressed File Size': '802 KB',
    'Compression Ratio': '0.16',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ogg_high_mid.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ogg_residual_high_mid.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'Ogg',
    'Compression Bit-Rate': 'high quality',
    'Original File Size': '5100 KB',
    'Compressed File Size': '1400 KB',
    'Compression Ratio': '0.27',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ogg_high.ogg">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ogg_residual_high.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '96 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '698 KB',
    'Compression Ratio': '0.14',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ac3_96.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ac3_residual_96.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '128 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '931 KB',
    'Compression Ratio': '0.18',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ac3_128.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ac3_residual_128.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '192 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '1400 KB',
    'Compression Ratio': '0.27',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ac3_192.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ac3_residual_192.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'AC3',
    'Compression Bit-Rate': '320 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '2300 KB',
    'Compression Ratio': '0.45',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_ac3_320.ac3">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_ac3_residual_320.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '98 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '1500 KB',
    'Compression Ratio': '0.29',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_m4a_98.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_m4a_residual_98.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '128 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '1400 KB',
    'Compression Ratio': '0.27',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_m4a_128.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_m4a_residual_128.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '192 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '1600 KB',
    'Compression Ratio': '0.31',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_m4a_192.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_m4a_residual_192.wav">residual audio</a>'
  }, {
    'File Name': 'Violin',
    'Compression Algorithm': 'M4A',
    'Compression Bit-Rate': '320 kbps',
    'Original File Size': '5100 KB',
    'Compressed File Size': '1500 KB',
    'Compression Ratio': '0.29',
    'Link to Original Version': '<a href="violin_wav_original.wav">original audio</a>',
    'Link to Compressed Version': '<a href="violin_m4a_320.m4a">compressed audio</a>',
    'Link to Residual Noise': '<a href="violin_m4a_residual_320.wav">residual audio</a>'
  }]

function audio_comparison() {
    let table = document.createElement('table');
    table.id = "comparison_table"
    let headerName = table.insertRow(-1);
    for (i = 0; i < header.length; i++) {
      let headerCell = document.createElement("TH");
      headerCell.innerHTML = header[i];
      headerName.appendChild(headerCell);
    }
    for (row = 0; row < audio_sample.length; row++) {
      tr = document.createElement('tr');
      let release_data = Object.keys(audio_sample[row]);
      for (col = 0; col < Object.keys(audio_sample[row]).length; col++) {
        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = audio_sample[row][release_data[col]];
      }
      table.appendChild(tr);
    }
    document.getElementById("comparison").appendChild(table);
  }

audio_comparison()
