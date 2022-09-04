import React, { useState } from "react";
import "./TestSurvey.css";
import { useHistory } from "react-router-dom";

export default function TestSurvey() {
  const [answered, setAnswered] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [temperature, setTemperature] = useState(null);

  const navigate = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (temperature >= 37 && answered === "true") {
      localStorage.setItem("covid", true);
    } else {
      localStorage.setItem("covid", false);
    }
    navigate.push("/novosti");
  };

  return (
    <>
      <div id="form" class="_form">
        <form onSubmit={handleSubmit} name="checkCovid">
          <fieldset>
            <legend>
              Дали во изминатите 2 недели сте имале зголемена телесна
              температура, кашлица, отежнато дишење, болки во грлото, треска,
              болки во мускулите или губење на вкус или мирис?
            </legend>
            <label class="input-select">
              <select
                onChange={(e) => setAnswered2(e.target.value)}
                name="question"
              >
                <option selected="selected">Селектирај</option>
                <option value="true">Да</option>
                <option value="false">Не</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>
              Дали во изминатите 2 недели сте имале влошено течење на носот,
              назална конгестија, главоболка или гадење/повраќање/дијареа што не
              е поврзано со хронична состојба или сезонски алергии?
            </legend>
            <label class="input-select">
              <select
                onChange={(e) => setAnswered2(e.target.value)}
                name="question"
              >
                <option selected="selected">Селектирај</option>
                <option value="true">Да</option>
                <option value="false">Не</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>
              Дали сте биле тестирани за COVID-19 во изминатите 2 недели?
            </legend>
            <label class="input-select">
              <select
                onChange={(e) => setAnswered2(e.target.value)}
                name="question"
              >
                <option selected="selected">Селектирај</option>
                <option value="true">Да</option>
                <option value="false">Не</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>
              Дали ви е побарано да влезете во карантин или сте биле изложени на
              лице кое е потврдено позитивно на COVID-19 во последните 2 недели?
            </legend>
            <label class="input-select">
              <select
                onChange={(e) => setAnswered2(e.target.value)}
                name="question"
              >
                <option selected="selected">Селектирај</option>
                <option value="true">Да</option>
                <option value="false">Не</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Дали имате зголемена телесна температура?</legend>
            <label class="input-select">
              <select
                onChange={(e) => setAnswered(e.target.value)}
                name="question"
              >
                <option selected="selected">Селектирај</option>
                <option value="true">Да</option>
                <option value="false">Не</option>
              </select>
            </label>
          </fieldset>

          {answered === "true" && (
            <fieldset>
              <legend>Колку ви е телесната температура?</legend>
              <input
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                type="number"
                placeholder="36"
                min="35"
                max="41"
                name="name"
              />
            </fieldset>
          )}

          <fieldset>
            <legend>Какви ви се условите на работното место?</legend>
            <label class="input-select">
              <select
                onChange={(e) => setAnswered2(e.target.value)}
                name="question"
              >
                <option selected="selected">Селектирај</option>
                <option value="Имам можност да работам од дома">
                  Имам можност да работам од дома
                </option>
                <option value="Немам можност да работам од дома">
                  Немам можност да работам од дома
                </option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>GENDER</legend>
            <label class="input-check">
              <input type="radio" name="gender" value="m" />
              <span>Male</span>
            </label>
            <label class="input-check">
              <input type="radio" name="gender" value="f" />
              <span>Female</span>
            </label>
          </fieldset>

          {answered === false && answered2 === false ? (
            <button disabled type="submit" name="submit" value="Run the test" />
          ) : (
            <button type="submit" name="submit" value="Run the test" />
          )}
        </form>
      </div>
    </>
  );
}
