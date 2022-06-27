<script>
document.getElementById('btn-nav-toggle').addEventListener('click', openNav)
console.log('點擊打開監控台')
function openNav() {
    if (document.getElementById('primary-navigation').classList.contains('active') == true) { document.getElementById('primary-navigation').classList.remove('active') }
    else { 
    document.getElementById('primary-navigation').classList.add('active')}
} 
</script>