import pandas as pd
import latex2markdown
import re

def main():
    
    d = pd.read_csv('~/Downloads/WABI_2025_withabstracts.csv')
    d = d.loc[d.Decision != "REJECT"]
    print(d)
    delimiters = r"[,]|\s+and\s+"
    adict = set([])
    for i, e in enumerate(d.iterrows()):
        e = e[1]
        with open(f'../_talks/talk{i+4}.md', 'w') as ofile:
            ofile.write('---\n')
            title = e.Title.replace('$', '').replace('\n', '')
            ofile.write(f'name: \"{title}\"\n')
            authors = [a.replace('\n', '').strip() for a in re.split(delimiters, e.Authors)]
            ofile.write(f'speakers:\n')
            for a in authors:
                adict.add(a)
                ofile.write(f'  - {a}\n')
            ofile.write('categories:\n')
            ofile.write('  - Proceedings\n')
            ofile.write('  - Talk\n')
            ofile.write('hide: false\n')
            ofile.write('---\n')
            ofile.write('\n')
            ab = latex2markdown.LaTeX2Markdown(e.Abstract).to_markdown()
            ofile.write(f'{ab}')

        #for a in adict:
        #    n = a.replace(' ', '_')
        #    with open(f'../_speakers/{n}.md', 'w') as ofile:
        #        ofile.write('---\n')
        #        ofile.write(f'name: {a}\n')
        #        ofile.write(f'first_name: {a.split(" ")[0]}\n')
        #        ofile.write(f'last_name: {" ".join(a.split(" ")[1:])}\n')
        #        ofile.write('links:\n')
        #        ofile.write('  - name: Profile\n')
        #        ofile.write('---\n')

if __name__ == "__main__":
    main()
