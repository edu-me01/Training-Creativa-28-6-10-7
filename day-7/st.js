
    // عرض الجدول كامل
    function renderTable() {
      const tbody = document.querySelector("#studentsTable tbody");
      tbody.innerHTML = "";
      students.forEach(s => {
        tbody.innerHTML += `<tr>
          <td>${s.name}</td>
          <td>${s.grades.Math}</td>
          <td>${s.grades.English}</td>
          <td>${s.grades.Physics}</td>
          <td>${s.grades.Chemistry}</td>
          <td>${s.grades.Biology}</td>
        </tr>`;
      });
    }

    // عرض مجموع درجات طالب معين
    function getStudentTotal() {
      const name = document.getElementById("studentNameInput").value.trim();
      const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
      if (!student) return document.getElementById("studentTotal").textContent = "🚫 الطالب غير موجود";
      const total = Object.values(student.grades).reduce((a, b) => a + b, 0);
      document.getElementById("studentTotal").textContent = `🔢 مجموع درجات ${student.name}: ${total}`;
    }

    // عرض مجموع درجات مادة معينة
    function getSubjectTotal() {
      const subject = document.getElementById("subjectSelect").value;
      const total = students.map(s => s.grades[subject]).reduce((a, b) => a + b, 0);
      document.getElementById("subjectTotal").textContent = `📚 مجموع درجات مادة ${subject}: ${total}`;
    }


    // تشغيل أولي عند فتح الصفحة
    window.onload = () => {
      renderTable();
    };