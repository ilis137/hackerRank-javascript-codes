function gradingStudents(grades) {
    const newGrades = grades.map((gr) => {
        for (let i = 1; i < 3; i++) {
            if ((gr + i) % 5 == 0 && gr >= 38) {
                gr += i
            }
        }
        return gr;
    })
    return newGrades
}