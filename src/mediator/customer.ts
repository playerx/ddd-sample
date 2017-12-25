import { CustomerAggregate } from "../domain";


CustomerAggregate.Events.Registered.attachAsync(async x => {
	console.log('CustomerAggr', 'Registered', x.data);
})

CustomerAggregate.Events.AccountsCountUpdated.attachAsync(async x => {
	console.log('CustomerAggr', 'AccountsCountUpdated', x.data);
})


CustomerAggregate.Events.AccountsCountUpdated.attachSync(async x => {
	throw new Error('Stop processs!!!!!!')
});
