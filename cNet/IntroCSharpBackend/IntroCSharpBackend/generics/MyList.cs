public class MyList<T>
{
    private List<T> List;
    private int Limit;

    public MyList(int limit)
    {
        this.Limit = limit;
        this.List = new List<T>();
    }

    public string GetContent()
    {
        string content = "";
        foreach (var ele in List)
        {
            content += ele + ", ";
        }
        return content;
    }
}
