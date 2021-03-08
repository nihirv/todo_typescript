import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useTheme, makeStyles } from "@material-ui/core/styles";

interface TaskProps {
  title: string;
  priority: "High" | "Medium" | "Low" | "Done";
  description: string;
}

const Task: React.FC<TaskProps> = ({ title, priority, description }) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    taskContainer: {
      minWidth: 300,
      backgroundColor:
        priority === "High"
          ? theme.palette.primary.main
          : priority === "Medium"
          ? `#28bf8d`
          : priority === "Low"
          ? `#03a655`
          : `#b54eab`,
      border: "2px solid black",
      margin: "5px",
      padding: "0 30px",
      boxShadow: "2px 5px grey",
      borderRadius: "25px",
      fontFamily: "monospace",
      [theme.breakpoints.up("md")]: {
        width: "80%",
        margin: "auto",
      },
    },
  });
  const classes = useStyles();

  return (
    <>
      <Card className={classes.taskContainer}>
        {" "}
        <CardContent>
          {" "}
          <h1> {title} </h1>
          <h2> {description}</h2>
          <h3>{priority}</h3>
        </CardContent>
      </Card>
    </>
  );
};

export default Task;
