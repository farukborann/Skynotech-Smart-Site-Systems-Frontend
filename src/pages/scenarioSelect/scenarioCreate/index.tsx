import { useEffect, useState } from "react";
import moment from "moment";
import { createScenarioReq } from "src/services/scenarios";
import { CreateScenarioRequest } from "src/services/scenarios/models";
import { SensorResponse } from "src/services/sensors/models";
import { SubSystemResponse } from "src/services/sub-systems/models";
import getSubSystemProps from "src/utils/sub-systems/getProps";

import IgnitionsForm from "./ignitions";
import NameForm from "./name";
import SensorForms from "./sensors";
import TimesForm from "./times";

import styles from "./style.module.css";

const CreateScenario = ({
  subSystem,
  sensors,
  onSuccess,
}: {
  subSystem: SubSystemResponse;
  sensors: SensorResponse[];
  onSuccess: () => void;
}) => {
  const [scenarioName, setScenarioName] = useState("");
  const [scenarioDesc, setScenarioDesc] = useState("");
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [minValue, setMinValue] = useState<number>(1);
  const [maxValue, setMaxValue] = useState<number>(100);
  const [ignitionsState, setIgnitionsState] = useState<{
    [key: string]: 1 | 0;
  }>({});
  const [selectedSensorId, setSelectedSensorId] = useState<string>("");
  const [hasCondition, setHasCondition] = useState<boolean>(false);

  useEffect(() => {
    if (!sensors.length) return;

    setSelectedSensorId(sensors[0]._id);
  }, [sensors]);

  useEffect(() => {
    if (!subSystem) return;

    const newIgnitionsState: { [key: string]: 1 | 0 } = {};
    Array.from({ length: subSystem.ignitionCount }).forEach((_, index) => {
      newIgnitionsState[index + 1] = 0;
    });

    setIgnitionsState(newIgnitionsState);
  }, [subSystem]);

  const handleIgnitionChange = (index: number, status: boolean) => {
    const newIgnitionsState = { ...ignitionsState };
    newIgnitionsState[index] = status ? 1 : 0;
    setIgnitionsState(newIgnitionsState);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!scenarioName || !startTime || !endTime) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (hasCondition && (!minValue || !maxValue || !selectedSensorId)) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (maxValue < minValue) {
      alert("Sensörün maksimum değeri, minimum değerinden küçük olamaz.");
      return;
    }

    // Send data to the server
    const data: CreateScenarioRequest = {
      name: scenarioName,
      subSystemId: subSystem._id,
      startDate: moment(startTime).toISOString(),
      endDate: moment(endTime).toISOString(),
      ignitions: ignitionsState,
    };

    if (hasCondition) {
      data.sensorId = selectedSensorId;
      data.min = minValue;
      data.max = maxValue;
    }

    const res = await createScenarioReq(data);

    if ("error" in res) {
      const message = res.error.responseError.message;

      if (Array.isArray(message)) {
        alert(message.join("\n"));
      } else {
        alert(message);
      }
      return;
    }

    onSuccess();

    // Formu temizle
    setScenarioName("");
    setScenarioDesc("");
  };

  const handleReset = () => {
    setScenarioName("");
    setScenarioDesc("");
    setStartTime(new Date());
    setEndTime(new Date());
    setMinValue(1);
    setMaxValue(100);

    const newIgnitionsState: { [key: string]: 1 | 0 } = {};
    Array.from({ length: subSystem.ignitionCount }).forEach((_, index) => {
      newIgnitionsState[index + 1] = 0;
    });
    setIgnitionsState(newIgnitionsState);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <div className={styles.infos}>
          <NameForm
            scenarioName={scenarioName}
            setScenarioName={setScenarioName}
            scenarioDesc={scenarioDesc}
            setScenarioDesc={setScenarioDesc}
          />
          <IgnitionsForm
            ignitionsState={ignitionsState}
            handleIgnitionChange={handleIgnitionChange}
          />
        </div>
        <div className={styles.conditions}>
          <TimesForm
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
          <SensorForms
            setSelectedSensorId={setSelectedSensorId}
            selectedSensorId={selectedSensorId}
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            sensors={sensors}
            subSystemProp={getSubSystemProps(subSystem.systemType) ?? undefined}
            hasCondition={hasCondition}
            setHasCondition={setHasCondition}
          />
        </div>
      </div>
      <div className={styles.btnGroup}>
        <button
          type="reset"
          className={styles.cancel}
          onClick={() => handleReset()}
        >
          <span className={styles.cancelSpan}>Temizle</span>
        </button>
        <button type="submit" className={styles.save}>
          <span className={styles.saveSpan}>Oluştur</span>
        </button>
      </div>
    </form>
  );
};

export default CreateScenario;
