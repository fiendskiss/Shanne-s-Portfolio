export function WindowBar({title,kind='image'}:{title:string;kind?:'image'|'folder'|'mail'}) {
 return <span className="window-bar" aria-hidden="true"><span className={`file-icon file-icon-${kind}`}>{kind==='folder'?'▰':kind==='mail'?'✉':'▧'}</span><span className="window-title">{title}</span><span className="window-controls"><span>−</span><span>□</span><span>×</span></span></span>;
}
