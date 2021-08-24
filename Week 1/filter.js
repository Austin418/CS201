let kaines = people.filter((person) => {
    const { name } = person
    return name.split (" ")[0] === "Kaine"
})