
import Card from 'react-bootstrap/Card';

const Pubg=()=>{
   
return(
    <>
    <div className="pubgback">
      <div className='pubg1'>
    <Card className="pubg">
      <Card.Img  src="https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg" width='800px' />
      <Card.Body>
        <Card.Text className="pubgcontent">
          <p>
            <h2>Game Name : PUBG</h2>
            <h2>Publishers &nbsp;&nbsp;: Tencent Games,Krafton,Microsoft Studios (Xbox One)</h2>
            <h2>Developer(s) : PUBG Studios[c]</h2>
            <h2>Director(s)	: Brendan Greene,Jang Tae-seok</h2>
            <h2>Producer(s)	: Kim Chang-han</h2>
            <h2>Designer(s)	: Brendan Greene</h2>
            <h2>Series : PUBG Universe</h2>
            <h2>Engine : Unreal Engine 4</h2>
            <h2>Platform(s)	: Windows,Android,iOS,Xbox One,PlayStation 4,Stadia,Xbox eries X/S,PlayStation 5</h2>
            <h2>Release	: December 20, 2017</h2>
            <h2>Genre(s) : Battle royale</h2>
            <h2>Mode(s)	: Multiplayer</h2>
          </p>
        </Card.Text>
        <Card.Link className='pubglink' href="https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share">Download Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </div>
    
    </>
)
}
export default Pubg;