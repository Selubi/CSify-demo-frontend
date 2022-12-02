import React, { useState } from "react";
import "./Csify.css";
const Csify = () => {
  const [base_sentence, setBase_sentence] = useState("");
  const [base_language, setBase_language] = useState("");
  const [inserted_language, setInserted_language] = useState("");
  console.log(base_sentence, base_language, inserted_language);

  const translate = () => {
    let data = { base_sentence, base_language, inserted_language };
    fetch("https://csify.selubi.dev/csify/", {
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
            <option>select</option>
            <option value="en">English - en</option>
            <option value="ja">Japanese - ja</option>
            <option value="ca">Catalan - ca </option>
            <option value="zh">Chinese - zh</option>
            <option value="hr">Croatian - hr</option>
            <option value="da">Danish - da</option>
            <option value="nl">Dutch - nl</option>
            <option value="fi">Finnish - fi</option>
            <option value="fr">French - fr</option>
            <option value="de">German - de</option>
            <option value="el">Greek - el</option>
            <option value="it">Italian - it</option>
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
            <option value="en">English - en</option>
            <option value="ja">Japanese - ja</option>
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
            <option value="ca">Catalan - ca </option>
            <option value="zh">Chinese - zh</option>
            <option value="hr">Croatian - hr</option>
            <option value="da">Danish - da</option>
            <option value="nl">Dutch - nl</option>
            <option value="fi">Finnish - fi</option>
            <option value="fr">French - fr</option>
            <option value="de">German - de</option>
            <option value="el">Greek - el</option>
            <option value="it">Italian - it</option>
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
