const LinksSocialMedia = {
    github: "gabrielb3r",
    youtube: "gabrielb3rnardo",
    facebook: "gabrielb3rnardo",
    instagram: "gabrielb3rnardo",
    twitter: "gabrielb3rnardo"
}
function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
    }
}
changeSocialMediaLinks()
function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userGitLogin.textContent = data.login
    })
}
getGitHubProfileInfos()