import theamaya from "../images/theamaya.png";
import notesapp from "../images/notesapp.png";
import procviz from "../images/procviz.png";

export const projectsData = [
  {
    title: "Combining object detectors for stereo images",
    image: "",
    date: "",
    subTitle: "Research",
    link: "",
    details: [
      "A geometric approach to combine object detections on corresponding images of two stereo cameras on autonomous driving vehicles, to increase precision and recall. ",
      "A fasterRCNN-resnet101 detection model was used on KITTI can Cityscapes autonomous driving datasets for the experiment."
    ]
  },
  {
    title: "the-amaya",
    image: theamaya,
    date: "",
    subTitle: "Website",
    link: "https://isuru-dissanayake.github.io/the-amaya/",
    details: [
      "A personal website built with React as a learning project.",
      "Figma was used as the designing tool. "
    ]
  },
  {
    title: "4NOTE4 Notes app",
    image: notesapp,
    date: "",
    subTitle: "Download",
    link: "https://github.com/Isuru-Dissanayake/News-App",
    details: [
      "A notes app built with Electron for Window OS.",
      "Features such as Create, save, edit, and orgainze notes with tags are already implemented. Note sharing and edit history features will are still under development.",
      "V1.0.0 is released"
    ]
  },
  {
    title: "procViz",
    image: procviz,
    date: "",
    subTitle: "Simulation",
    link: "https://proc-viz.vercel.app/",
    details: [
      "Simulation of an Instruction Set Architecture(ISA) for a custom processor using P5.js.",
      "Code is hosted on GitHub repository and deployed with Verce"
    ]
  }
];
