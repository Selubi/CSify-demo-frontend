import React, { useState } from "react";
import "./Csify.css";
const Csify = () => {
  const [base_sentence, setBase_sentence] = useState("");
  const [base_language, setBase_language] = useState("auto");
  const [inserted_language, setInserted_language] = useState("");
  console.log(base_sentence, base_language, inserted_language);

  const translate = () => {
    let data = { base_sentence, base_language, inserted_language };
    fetch("https://csify-backend.selubi.tech/csify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.warn(result.code_switched_sentence);
        const text = document.getElementById("showText");
        text.innerHTML = result.code_switched_sentence;
      });
  };

  return (
    <div className="container">
      <h2 className="mt-5 text-white">Project: CSify</h2>

      <div className="row d-flex align-items-center justify-content-between mt-5">
        <div className="col col-xs-6 col-sm-6 col-md-6 mb-3">
          <p className="fs-4 m-0 text-white">Base Language</p>
          <select
            className="secondary border px-5  py-3 fs-5 text-center fw-semibold rounded text-primary"
            value={base_language}
            onChange={(e) => setBase_language(e.target.value)}
          >
            <option value="auto">Auto-Detect - auto</option>
            <option value="ca">Catalan - ca</option>
            <option value="zh">Chinese - zh</option>
            <option value="hr">Croatian - hr</option>
            <option value="da">Danish - da</option>
            <option value="nl">Dutch - nl</option>
            <option value="en">English - en</option>
            <option value="fi">Finnish - fi</option>
            <option value="fr">French - fr</option>
            <option value="de">German - de</option>
            <option value="el">Greek - el</option>
            <option value="it">Italian - it</option>
            <option value="ja">Japanese - ja</option>
            <option value="ko">Korean - ko</option>
            <option value="lt">Lithuanian - lt</option>
            <option value="mk">Macedonian - mk</option>
            <option value="nb">Norwegian Bokmål - nb</option>
            <option value="pl">Polish - pl</option>
            <option value="pt">Portugese - pt</option>
            <option value="ro">Romanian - ro</option>
            <option value="ru">Russian - ru</option>
            <option value="es">Spanish - es</option>
            <option value="sv">Swedish - sv</option>
            <option value="uk">Ukrainian - uk</option>
          </select>
        </div>
        <div className="col col-xs-6 col-xs-6 col-sm-6 col-md-6">
          <p className=" m-0 fs-4  text-white">Secondary Language</p>
          <select
            className="secondary border px-5 text-center py-3 fs-5 fw-semibold rounded text-primary"
            value={inserted_language}
            onChange={(e) => setInserted_language(e.target.value)}
          >
            <option>select</option>
            <option value="af">Afrikaans - af</option>
            <option value="sq">Albanian - sq</option>
            <option value="am">Amharic - am</option>
            <option value="ar">Arabic - ar</option>
            <option value="hy">Armenian - hy</option>
            <option value="as">Assamese - as</option>
            <option value="ay">Aymara - ay</option>
            <option value="az">Azerbaijani - az</option>
            <option value="bm">Bambara - bm</option>
            <option value="eu">Basque - eu</option>
            <option value="be">Belarusian - be</option>
            <option value="bn">Bengali - bn</option>
            <option value="bho">Bhojpuri - bho</option>
            <option value="bs">Bosnian - bs</option>
            <option value="bg">Bulgarian - bg</option>
            <option value="ca">Catalan - ca</option>
            <option value="ceb">Cebuano - ceb</option>
            <option value="ny">Chichewa - ny</option>
            <option value="zh-CN">Chinese (Simplified) - zh-CN</option>
            <option value="zh-TW">Chinese (Traditional) - zh-TW</option>
            <option value="co">Corsican - co</option>
            <option value="hr">Croatian - hr</option>
            <option value="cs">Czech - cs</option>
            <option value="da">Danish - da</option>
            <option value="dv">Dhivehi - dv</option>
            <option value="doi">Dogri - doi</option>
            <option value="nl">Dutch - nl</option>
            <option value="en">English - en</option>
            <option value="eo">Esperanto - eo</option>
            <option value="et">Estonian - et</option>
            <option value="ee">Ewe - ee</option>
            <option value="tl">Filipino - tl</option>
            <option value="fi">Finnish - fi</option>
            <option value="fr">French - fr</option>
            <option value="fy">Frisian - fy</option>
            <option value="gl">Galician - gl</option>
            <option value="ka">Georgian - ka</option>
            <option value="de">German - de</option>
            <option value="el">Greek - el</option>
            <option value="gn">Guarani - gn</option>
            <option value="gu">Gujarati - gu</option>
            <option value="ht">Haitian Creole - ht</option>
            <option value="ha">Hausa - ha</option>
            <option value="haw">Hawaiian - haw</option>
            <option value="iw">Hebrew - iw</option>
            <option value="hi">Hindi - hi</option>
            <option value="hmn">Hmong - hmn</option>
            <option value="hu">Hungarian - hu</option>
            <option value="is">Icelandic - is</option>
            <option value="ig">Igbo - ig</option>
            <option value="ilo">Ilocano - ilo</option>
            <option value="id">Indonesian - id</option>
            <option value="ga">Irish - ga</option>
            <option value="it">Italian - it</option>
            <option value="ja">Japanese - ja</option>
            <option value="jw">Javanese - jw</option>
            <option value="kn">Kannada - kn</option>
            <option value="kk">Kazakh - kk</option>
            <option value="km">Khmer - km</option>
            <option value="rw">Kinyarwanda - rw</option>
            <option value="gom">Konkani - gom</option>
            <option value="ko">Korean - ko</option>
            <option value="kri">Krio - kri</option>
            <option value="ku">Kurdish (Kurmanji) - ku</option>
            <option value="ckb">Kurdish (Sorani) - ckb</option>
            <option value="ky">Kyrgyz - ky</option>
            <option value="lo">Lao - lo</option>
            <option value="la">Latin - la</option>
            <option value="lv">Latvian - lv</option>
            <option value="ln">Lingala - ln</option>
            <option value="lt">Lithuanian - lt</option>
            <option value="lg">Luganda - lg</option>
            <option value="lb">Luxembourgish - lb</option>
            <option value="mk">Macedonian - mk</option>
            <option value="mai">Maithili - mai</option>
            <option value="mg">Malagasy - mg</option>
            <option value="ms">Malay - ms</option>
            <option value="ml">Malayalam - ml</option>
            <option value="mt">Maltese - mt</option>
            <option value="mi">Maori - mi</option>
            <option value="mr">Marathi - mr</option>
            <option value="mni-Mtei">Meiteilon (Manipuri) - mni-Mtei</option>
            <option value="lus">Mizo - lus</option>
            <option value="mn">Mongolian - mn</option>
            <option value="my">Myanmar - my</option>
            <option value="ne">Nepali - ne</option>
            <option value="no">Norwegian - no</option>
            <option value="or">Odia (Oriya) - or</option>
            <option value="om">Oromo - om</option>
            <option value="ps">Pashto - ps</option>
            <option value="fa">Persian - fa</option>
            <option value="pl">Polish - pl</option>
            <option value="pt">Portuguese - pt</option>
            <option value="pa">Punjabi - pa</option>
            <option value="qu">Quechua - qu</option>
            <option value="ro">Romanian - ro</option>
            <option value="ru">Russian - ru</option>
            <option value="sm">Samoan - sm</option>
            <option value="sa">Sanskrit - sa</option>
            <option value="gd">Scots Gaelic - gd</option>
            <option value="nso">Sepedi - nso</option>
            <option value="sr">Serbian - sr</option>
            <option value="st">Sesotho - st</option>
            <option value="sn">Shona - sn</option>
            <option value="sd">Sindhi - sd</option>
            <option value="si">Sinhala - si</option>
            <option value="sk">Slovak - sk</option>
            <option value="sl">Slovenian - sl</option>
            <option value="so">Somali - so</option>
            <option value="es">Spanish - es</option>
            <option value="su">Sundanese - su</option>
            <option value="sw">Swahili - sw</option>
            <option value="sv">Swedish - sv</option>
            <option value="tg">Tajik - tg</option>
            <option value="ta">Tamil - ta</option>
            <option value="tt">Tatar - tt</option>
            <option value="te">Telugu - te</option>
            <option value="th">Thai - th</option>
            <option value="ti">Tigrinya - ti</option>
            <option value="ts">Tsonga - ts</option>
            <option value="tr">Turkish - tr</option>
            <option value="tk">Turkmen - tk</option>
            <option value="ak">Twi - ak</option>
            <option value="uk">Ukrainian - uk</option>
            <option value="ur">Urdu - ur</option>
            <option value="ug">Uyghur - ug</option>
            <option value="uz">Uzbek - uz</option>
            <option value="vi">Vietnamese - vi</option>
            <option value="cy">Welsh - cy</option>
            <option value="xh">Xhosa - xh</option>
            <option value="yi">Yiddish - yi</option>
            <option value="yo">Yoruba - yo</option>
            <option value="zu">Zulu - zu</option>
          </select>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-12 col-sm-6 text-area mt-5">
          <textarea
            rows="7"
            id="textField"
            className="form-control input-lg py-3 fs-4 fs-5"
            type="text-area "
            placeholder="Input Text"
            onChange={(e) => setBase_sentence(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-6 text-area mt-5">
          <textarea
            rows="7"
            id="showText"
            className="form-control input-lg py-3 fs-4 bg-light"
            type="text-area "
            placeholder="Translated Text"
            disabled
          />
        </div>
      </div>
      {
        <button
          onClick={translate}
          className="btn w-50 bg-primary mt-5 text-white fs-3 mb-5"
        >
          Translate
        </button>
      }
    </div>
  );
};

export default Csify;
