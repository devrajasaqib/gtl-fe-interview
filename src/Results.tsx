import "./Results.css";

enum Quality {
  High = "high",
  Medium = "medium",
  Low = "low",
}

// The numbering represents the order the events are expected to occur,
// First is the baseline, then the follow-up, and finally the conclusion.
// All event's may not be present, but when they are, the earlier event will always be present.
enum Event {
  Baseline = "Baseline",
  FollowUp = "FollowUp",
  Conclusion = "Conclusion",
}

interface Result {
  patientId: string; // the client specific identifier
  scannedAt: Date; // the time at which the sample was digitally scanned
  score: number; // the score of the sample
  event: Event; // the event that the sample was taken at
  sampleQuality: Quality; // the quality of the sample
  dateOfBirth: string; // the date of birth of the patient
}

// please do not edit the data, unless to add further examples
const data: Result[] = [
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.81,
    event: Event.FollowUp,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-01T12:00:00Z"),
    score: 0.92,
    event: Event.Baseline,
    sampleQuality: Quality.High,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "87gd2",
    scannedAt: new Date("2021-08-08T12:00:00Z"),
    score: 0.43,
    event: Event.Conclusion,
    sampleQuality: Quality.Low,
    dateOfBirth: "1990-01-01",
  },
  {
    patientId: "js27h",
    scannedAt: new Date("2021-08-02T12:00:00Z"),
    score: 0.74,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1993-02-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-03T12:00:00Z"),
    score: 0.25,
    event: Event.Baseline,
    sampleQuality: Quality.Medium,
    dateOfBirth: "1981-04-12",
  },
  {
    patientId: "9782e",
    scannedAt: new Date("2021-08-21T12:00:00Z"),
    score: 0.21,
    event: Event.FollowUp,
    sampleQuality: Quality.High,
    dateOfBirth: "1981-04-12",
  },
];

const getQualityBadge = (quality: Quality) => {
  switch (quality) {
    case Quality.High:
      return <span className="badge badge-success">High</span>;
    case Quality.Medium:
      return <span className="badge badge-info">Medium</span>;
    case Quality.Low:
      return <span className="badge badge-red">Low</span>;
    default:
      return null;
  }
};

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export default function Results() {
  return (
    <div className="cards-wrap">
      <div className="container">
        <div className="cards-row">
          {data.map((result, index) => (
            <div className="cards-col" key={index}>
              <div className="card border border-primary custom-card">
                <div className="card-body">
                  <ul>
                    <li>
                      <span>Patient ID:</span>
                      <span className="badge badge-info">
                        {result.patientId}
                      </span>
                    </li>
                    <li>
                      <span>Scaned at:</span>
                      <span>{formatDate(result.scannedAt)}</span>
                    </li>
                    <li>
                      <span>Score:</span>
                      <span>{result.score.toFixed(2)}</span>
                    </li>
                    <li>
                      <span>Event:</span>
                      <span>{result.event}</span>
                    </li>
                    <li>
                      <span>Sample Quality:</span>
                      {getQualityBadge(result.sampleQuality)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
