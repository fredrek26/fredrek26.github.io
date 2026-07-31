function ChooseRandomImage ()
{
    const numberOfImages = 5;
    let index = GenerateRandomNumber(1)
    // console.log(index)

    switch (index)
    {
        default:
            document.body.style.backgroundImage = 'url("/assets/img/Radiance.jpg")';
            break;

        case "1":
            document.body.style.backgroundImage = 'url("/assets/img/animals/brown fox on green grass.jpg")';
            break;

        case "2":
            document.body.style.backgroundImage = 'url("/assets/img/animals/brown fox on ground.jpg")';
            break;

        case "3":
            document.body.style.backgroundImage = 'url("/assets/img/animals/fox in grass and flowers licking itself.png")';
            break;

        case "4":
            document.body.style.backgroundImage = 'url("/assets/img/animals/red fox standing on grass field.jpg")';
            break;

        case "5":
            document.body.style.backgroundImage = 'url("/assets/img/animals/white fox sitting on snow during daytime.jpg")';
            break;
    }
}

// I love reusing my old sloppy code :blushes:
function GenerateRandomNumber(strLength) 
{
    // const charset = "0123456789";
    const charset = "12345";
    let result = "";
  
    for (let i = 0; i < strLength; i++) 
    {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }  
    return result.toString();
}