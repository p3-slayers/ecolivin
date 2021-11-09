import React from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import FinalStep from "./FinalStep";
import Button from 'react-bootstrap/Button';

const Navigation = (props) => {
    console.log({ props });
    return (
        <div>
          <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
            Previous
          </Button>
          <Button type="primary" onClick={props.next}>
            Next
          </Button>
        </div>
    );
  };

function Questionnaire() {
    const config = {
        navigation: {
            component: Navigation, // a React component with special props provided automatically
            location: "after" // or before
        }
    };

  return (
    <div className="container mb-5">
    <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
        <Step component={Step4} />
        <Step component={Step5} />
        <Step component={FinalStep} />
    </Steps>
      
    </div>
  );
}

export default Questionnaire;