var listServices = ["SEADM", "SECAP", "SEFPG", "SEMAN", "SEPAS", "SELIC", "SEINF", "SEGED", "SEGES", "SEEOR", "SECON", "SEFIN", "SEIMP", "SECIF", "SETCE", "SECOA", "SEAFI", "SECAC", "SECIN", "SEGEC", "SEABE", "SEBEX", "SEBFP", "SEBPP", "SEPFT", "SECAT", "SEADM (DABS)", "SEADM (DEHS)", "SEADN (DCOI)", "SEMAD", "SECCO", "SEGPT", "SEITI", "SEGTI", "SEOTI", "SESIE", "SESIF", "SEPRE"];

var option = "";

for (let i = 0; i < listServices.length; i++)
{
    option += '<option value="' + listServices[i] + '">';
}

document.getElementById("options").innerHTML = option;