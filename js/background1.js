chrome.contextMenus.create({title:"cn.arxiv redirector",onclick:main,contexts:["all"]});function main(){chrome.commands.onCommand.addListener(chrome.tabs.query({currentWindow:true,active:true},function(tabs){if(tabs[0]&&tabs[0].url){var url=tabs[0].url;var pattern_chrome=/^((chrome):\/\/)/;var pattern_arxiv_abs=/((http|https):\/\/arxiv.org\/abs\/.+)/;var pattern_arxiv_pdf=/((http|https):\/\/arxiv.org\/pdf\/.+)/;if(pattern_chrome.test(url)){return}if(pattern_arxiv_abs.test(url)){var pattern_paper_id=/((https|http):\/\/arxiv.org\/abs\/)/;var new_url=url.replace(pattern_paper_id,"http://cn.arxiv.org/pdf/");var new_url=new_url+".pdf";chrome.tabs.create({url:new_url})}if(pattern_arxiv_pdf.test(url)){var pattern_paper_id=/((https|http):\/\/arxiv.org\/)/;var new_url=url.replace(pattern_paper_id,"http://cn.arxiv.org/");chrome.tabs.update({url:new_url})}}}))};