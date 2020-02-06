let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

let newOption = new Option("Классика", "classic");
genres.append(newOption);

newOption.selected = true;