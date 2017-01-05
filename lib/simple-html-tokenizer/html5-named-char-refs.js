var HTML5NamedCharRefs = {
    // This is the only change to this fork. We don't need the complete named
    // character reference because linkifyHtml does not modify the escape
    // sequences. We do need &nbsp; so that whitespace is parsed properly. Other
    // types of whitespace should already be accounted for
    nbsp: "\u00a0"
};
export default HTML5NamedCharRefs;
