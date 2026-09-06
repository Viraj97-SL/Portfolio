import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../common/PageHeader";

function Research() {
  return (
    <>
      <PageHeader
        n="03"
        label="Research"
        description="MSc research on tri-modal Alzheimer's classification, currently being prepared for publication."
      >
        Modality present is not modality used
      </PageHeader>

      <Container className="research-section">
        <p>
          This work builds a tri-modal classification framework for
          Alzheimer's disease using the ADNI cohort, combining a 3D Swin
          Transformer with SimCLR-style self-supervised pretraining and
          dual LSTMs under a gated fusion layer to integrate MRI,
          longitudinal clinical scores, and CSF biomarkers. The model
          reaches 89.66% accuracy, a 0.9611 AUC-ROC, and an MCC of 0.8337
          on a small, imbalanced 187-subject dataset. The more
          interesting result is a negative one: ablation shows that a
          modality being present in the architecture does not guarantee
          the network is using it, which has direct implications for how
          multimodal clinical models should be audited before
          deployment.
        </p>
      </Container>
    </>
  );
}

export default Research;
