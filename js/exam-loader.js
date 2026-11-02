// js/exam-loader.js
window.KEYRAExamLoader = {
  loadExam: async function(examCode) {
    const manifest = window.KEYRA_EXAM_MANIFEST || [];
    if (!manifest.includes(examCode)) {
      throw new Error("Koodiin qormaataa kun hin argamne.");
    }

    if (window.KEYRA_EXAMS && window.KEYRA_EXAMS[examCode]) {
      return window.KEYRA_EXAMS[examCode];
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `exams/${examCode}.js`;
      script.onload = () => {
        const exam = window.KEYRA_EXAMS[examCode];
        if (exam) resolve(exam);
        else reject(new Error("Qormaanni fe'ame garuu hin galmaa'in."));
      };
      script.onerror = () => reject(new Error("File qormaataa fe'uu hin dandeenye."));
      document.head.appendChild(script);
    });
  }
};