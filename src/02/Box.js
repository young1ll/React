import '../Box.css';
import BoxHeader from './BoxHeader';
import BoxList from './BoxList';

const Box =()=> {
    return (
        <div>
            <BoxHeader />
            <BoxList />
            <p>Content</p>

        </div>
    );
}
export default Box;